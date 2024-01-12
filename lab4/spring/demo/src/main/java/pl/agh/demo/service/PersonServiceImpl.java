package pl.agh.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.agh.demo.dao.Person;
import pl.agh.demo.repository.PersonsRepository;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{

    @Autowired
    private PersonsRepository personsRepository;

    @Override
    public List<Person> getPersons() {
        return personsRepository.findAll();
    }

    @Override
    public Person getPerson(String surname) {
        // Tu możesz dodać odpowiednie metody z PersonsRepository w zależności od potrzeb
        return personsRepository.findBySurname(surname);
    }

    @Override
    public Person create(Person person) {
        return (Person) personsRepository.save(person);
    }

    @Override
    public Person getPerson(int id) {
        return (Person) personsRepository.findById(id).orElse(null);
    }
}
