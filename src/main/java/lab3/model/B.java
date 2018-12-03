package lab3.model;


import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Table(name = "B")
@Getter
@Setter
public class B {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "a")
    private  A a;


}
