package com.marseeys.backend.repository.possys;

import com.marseeys.backend.entity.possys.menu.Menu;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MenuRepository extends MongoRepository<Menu, Integer> {
    @Query("{$and: [ {'category': ?0}, {'deleted': false} ]}")
    List<Menu> findMenusByCategoryEquals(int category);
    @Query("{$and: [ {'_id': ?0}, {'deleted': false}] }")
    Optional<Menu> findMenu(int id);
    @Query("{ 'deleted': false }")
    Optional<List<Menu>> findAllMenus();
}
