package com.example.marpos;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.awt.*;
import java.util.List;

@SpringBootApplication
public class MarposApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarposApplication.class, args);
	}

//    @Bean   // Injecting data into the database to test if database functions as intended
//    CommandLineRunner runner(MenuItemRepository menu, IngredientsRepository ingredients) {
//        return args -> {
//            // Sample ingredients
//            Ingredient celery = new Ingredient(
//                    "celery",
//                    0.5,
//                    Quantification.STALK
//            );
//            Ingredient tomato = new Ingredient(
//                    "tomato",
//                    5,
//                    Quantification.WHOLE
//            );
//            Ingredient pork = new Ingredient(
//                    "pork",
//                    2,
//                    Quantification.KILO
//            );
//
//            // Sample menu item
//            MenuItem item = new MenuItem(
//                    "Sigang na Baboy",
//                    List.of(celery, tomato, pork)
//            );
//
//            ingredients.insert(List.of(celery, pork, tomato));
//            menu.insert(item);
//        };
//    }
}
