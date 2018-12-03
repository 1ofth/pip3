package lab3;


import lab3.model.A;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

public class AService {
    public A getA(EntityManager entityManager, String name){

//        TypedQuery<A> q = (TypedQuery<A>) entityManager.createQuery("SELECT a from A a JOIN FETCH " +
//                "a.bs WHERE a.name=?1 ORDER BY a.age");
        List<A> q = entityManager.createQuery("SELECT a FROM A a JOIN FETCH a.bs").getResultList();
//        q.setParameter(1, name);

        return q.get(0);
    }
}
