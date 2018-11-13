package lab3;


public class Point {
    private double x;
    private double y;
    private double r;
    private boolean inArea;
    public String time;
    public String execTime;

    Point(double x, double y, double r, boolean res)  {
            this.x = x;
            this.y = y;
            this.r = r;
            this.inArea = res;
        }

    public void setX(double x) {
        this.x = x;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean getinArea() {
        return inArea;
    }

    public void setInArea(boolean inArea) {
        this.inArea = inArea;
    }
}

