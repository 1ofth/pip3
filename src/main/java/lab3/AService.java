package lab3;


import lab3.model.A;
import lab3.model.A_;
import lab3.model.B;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Root;
import java.util.List;

public class AService {
    public A getAA(EntityManager entityManager, String name) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();

        CriteriaQuery<A> criteria = cb.createQuery( A.class );
        Root<A> aRoot = criteria.from(A.class);
        Join<A, B> ab = aRoot.join(A_.bs);
        aRoot.fetch(A_.bs);
        criteria.select(aRoot).where( cb.equal(ab.get(A_.name), "qqq"));

         return entityManager.createQuery(criteria).getSingleResult();
    }

    public A getA(EntityManager entityManager, String name){

        TypedQuery<A> q = (TypedQuery<A>) entityManager.createQuery("SELECT a from A a JOIN FETCH " +
                "a.bs WHERE a.name=?1 ORDER BY a.age");
        q.setParameter(1, name);

        return q.getSingleResult();
    }
}
