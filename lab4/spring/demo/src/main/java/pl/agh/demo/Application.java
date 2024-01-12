package pl.agh.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.agh.demo.dao.Person;
import pl.agh.demo.repository.PersonsRepository;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


	@Bean
	public CommandLineRunner demo(PersonsRepository repository) {
		return args -> {
			// save a few persons
			repository.save(new Person("John", "Doe", "IT"));
			repository.save(new Person("John", "Smith", "Tester"));

			// fetch all persons
			System.out.println("Persons found with findAll():");
			System.out.println("-------------------------------");
			repository.findAll().forEach(person -> {
				System.out.println(person.toString());
			});
		};
	}
}
