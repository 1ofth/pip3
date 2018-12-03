package lab3;

import lab3.model.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.EntityManager;

public interface ARepository extends CrudRepository<A, Long> {

    public A getAByNameTralala();
}
