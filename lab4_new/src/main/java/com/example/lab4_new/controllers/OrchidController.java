package com.example.lab4_new.controllers;

import com.example.lab4_new.pojos.Orchid;
import com.example.lab4_new.services.IOrchidService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping()
public class OrchidController {
    @Autowired
    private IOrchidService iOrchidService;

    @GetMapping("/orchids")
    public ResponseEntity<List<Orchid>> getAllOrchids() {
        return ResponseEntity.ok(iOrchidService.getAllOrchids());
    }

    @GetMapping("/orchids/{orchidId}")
    public ResponseEntity<Orchid> getOrchidById(@PathVariable int orchidId) {
        return ResponseEntity.ok(iOrchidService.getOrchidById(orchidId));
    }

    @PostMapping("/orchid/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Orchid saveOrchid(@Valid @RequestBody Orchid o) {
        return iOrchidService.addOrchid(o);
    }

    @PutMapping("/orchid/update/{orchidId}")
    public ResponseEntity<Orchid> updateOrchid(@PathVariable int orchidId, @Valid @RequestBody Orchid o) {
        return ResponseEntity.ok(iOrchidService.updateOrchid(orchidId, o));
    }

    @DeleteMapping("/orchid/delete/{orchidId}")
    public ResponseEntity<String> deleteOrchid(@PathVariable int orchidId) {
        iOrchidService.deleteOrchid(orchidId);
        return ResponseEntity.ok("Orchid removed");
    }
}
