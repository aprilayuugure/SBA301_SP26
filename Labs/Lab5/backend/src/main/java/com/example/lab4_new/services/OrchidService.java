package com.example.lab4_new.services;

import com.example.lab4_new.exceptions.ResourceNotFoundException;
import com.example.lab4_new.pojos.Orchid;
import com.example.lab4_new.repositories.IOrchidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class OrchidService implements IOrchidService {
    @Autowired
    private IOrchidRepository iOrchidRepo;

    @Override
    public List<Orchid> getAllOrchids() { return iOrchidRepo.findAll(); }

    @Override
    public Orchid getOrchidById(int orchidId) {
        return iOrchidRepo.findById(orchidId)
                          .orElseThrow(() -> new ResourceNotFoundException("Orchid with ID: " + orchidId + " not found"));
    }

    @Override
    public Orchid addOrchid(Orchid o) { return iOrchidRepo.save(o); }

    @Override
    public Orchid updateOrchid(int orchidId, Orchid o)
    {
        Orchid or = iOrchidRepo.findById(orchidId)
                               .orElseThrow(() -> new ResourceNotFoundException(("Orchid with ID: " + orchidId + " not found")));

        or.setName(o.getName());
        or.setImage(o.getImage());
        or.setCategory(o.getCategory());
        or.setDescription(o.getDescription());
        or.setIsSpecial(o.getIsSpecial());
        or.setPrice(o.getPrice());

        return iOrchidRepo.save(or);
    }

    @Override
    public void deleteOrchid(int orchidId) {
        Orchid or = iOrchidRepo.findById(orchidId)
                .orElseThrow(() -> new ResourceNotFoundException(("Orchid with ID: " + orchidId + " not found")));

        iOrchidRepo.deleteById(orchidId);
    }


}
