package com.example.lab4_new.services;

import com.example.lab4_new.pojos.Orchid;
import java.util.*;

public interface IOrchidService {
    public List<Orchid> getAllOrchids();

    public Orchid getOrchidById(int orchidId);

    public Orchid addOrchid(Orchid o);

    public Orchid updateOrchid(int orchidId, Orchid o);

    public void deleteOrchid(int orchidId);
}
