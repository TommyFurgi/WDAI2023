package pl.agh.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.agh.demo.dao.Person;
import pl.agh.demo.model.Greeting;
import pl.agh.demo.service.PersonService;

import java.util.List;


@RestController
@RequestMapping("/person")
public class hello {
    @Autowired
    private PersonService personService;


    @GetMapping("/hello")
    public ResponseEntity<Greeting> fun(@RequestParam(value = "name", defaultValue = "") String name) {
        Greeting greeting = new Greeting("czesc " + name);
//        return ResponseEntity.ok(greeting);
//        return "czesc " + name;
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/json");  // Example: Set Content-Type header

        return ResponseEntity.ok()
                .headers(headers)
                .body(greeting);
    }



    // GET /person
    @GetMapping
    public ResponseEntity<List<Person>> getPersons() {
        List<Person> persons = personService.getPersons();
        return new ResponseEntity<>(persons, HttpStatus.OK);
    }

    // GET /person/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Person> getPerson(@PathVariable int id) {
        Person person = personService.getPerson(id);
        if (person != null) {
            return new ResponseEntity<>(person, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // POST /person/create
    @PostMapping("/create")
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        Person createdPerson = personService.create(person);
        return new ResponseEntity<>(createdPerson, HttpStatus.CREATED);
    }

}
