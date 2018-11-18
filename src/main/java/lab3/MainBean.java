package lab3;

import javax.annotation.PreDestroy;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@ManagedBean
@SessionScoped
public class MainBean implements Serializable{
    private double x = 0;
    private double y = 0;
    private double r = 1;
    private String userID;

    public MainBean() {
        this.userID =  FacesContext.getCurrentInstance().getExternalContext()
                .getSessionId(true);
    }

    @PreDestroy
    public void cleanDB() {
        try {
            PreparedStatement pstmt = connection.prepareStatement("delete from points where session_id = ?;");
            pstmt.setString(1, userID);
            pstmt.executeUpdate();
            pstmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static Connection connection;
    static {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");

            String login = "s243875";
            String password = "******";
            connection = DriverManager
                    .getConnection("jdbc:oracle:thin:@localhost:1521/orbis", login, password);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.exit(0);
        }
        System.out.println("connected to the Helios");
    }

    public String getTime(){
        return (new SimpleDateFormat("HH:mm:ss")).format(new Date());
    }

    public String getDate() {
        return (new SimpleDateFormat("dd.MM.yyyy")).format(new Date());
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getX() {
        return x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getY() {
        return y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public double getR() {
        return r;
    }

    public void addToList() {
        if (r < 0 || r > 5  || x < -2 || x > 2 || y < -3 || y > 5) return;
        try {
            if(connection.isClosed()){
                return;
            }
            PreparedStatement pstmt = connection.prepareStatement("insert into points  values (points_seq.nextval, ?, ?, ?, ?, ?)");
            pstmt.setDouble(1, x);
            pstmt.setDouble(2, y);
            pstmt.setDouble(3, r);
            pstmt.setString(4, checkArea() ? "y" : "n");
            pstmt.setString(5, userID);
            pstmt.executeUpdate();
            pstmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Point> getList() {
        LinkedList<Point> llist = new LinkedList<Point>();
        try {
            if(connection.isClosed()){
                return null;
            }
            PreparedStatement pstmt = connection.prepareStatement("select x, y, r, result from  points where session_id = ?");
            pstmt.setString(1, userID);
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                Point p = new Point(rs.getDouble("x"), rs.getDouble("y"),
                        rs.getDouble("r"), rs.getString("result").equals("y"));
                llist.addFirst(p);
            }
            pstmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return llist;
    }

    public String toMain() {
        return "main.xhtml?faces-redirect=true";
    }

    public String toIndex() {
        return "index.xhtml?faces-redirect=true";
    }

    private boolean checkArea(){
        if(x<=0 && y>=0 && x*x+y*y<=r*r){
            return true;
        }
        if(x<=0 && y<=0 && x>= -r/2 && y>=-r){
            return true;
        }
        if(x>=0 && y>=0 && y<= -2*x + r){
            return true;
        }
        return false;
    }
}