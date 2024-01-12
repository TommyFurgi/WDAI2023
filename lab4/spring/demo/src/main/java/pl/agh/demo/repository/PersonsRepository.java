package pl.agh.demo.repository;

import org.springframework.data.repository.CrudRepository;
import pl.agh.demo.dao.Person;

import java.util.List;

public interface PersonsRepository extends CrudRepository<Person, Integer> {

    List<Person> findAll();

    Person findBySurname(String surname);
}
