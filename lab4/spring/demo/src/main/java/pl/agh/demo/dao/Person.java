package pl.agh.demo.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public String name;
    public String surname;
    public String job;

    // Constructors, getters, and setters

    public Person() {
    }

    public Person(String name, String surname, String job) {
        this.name = name;
        this.surname = surname;
        this.job = job;
    }

    // Additional getters, setters, and methods as needed

    // Getters and setters for id, name, surname, and job
}
