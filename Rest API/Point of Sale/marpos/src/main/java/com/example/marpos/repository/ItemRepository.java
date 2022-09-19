package com.example.marpos.repository;

import com.example.marpos.entity.item.Item;
import com.example.marpos.types.MenuCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends MongoRepository<Item, Integer> {
    @Query("{$and: [{'category': ?0}, {'deleted': false}]}")
    List<Item> findItemsByTypeEquals(MenuCategory type);
    @Query("{$and: [{'_id': ?0}, {'deleted': false}]}")
    Optional<Item> findItem(int id);

    @Query("{$and: [{'_id': ?0}, {'deleted': false}]}")
    Item returnNotOptional(int id);
}
