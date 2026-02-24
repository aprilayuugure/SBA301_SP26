module com.spring.sba301_hibernate {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.base;

    requires java.sql;
    requires jakarta.persistence;
    requires org.hibernate.orm.core;
    requires java.naming;
    requires spring.context;
    requires static lombok;

    opens com.spring.sba301_hibernate.pojo to javafx.base, org.hibernate.orm.core;
    opens com.spring.sba301_hibernate.controller to javafx.fxml;

    exports com.spring.sba301_hibernate.controller;
    exports com.spring.sba301_hibernate.pojo;
    exports com.spring.sba301_hibernate.dao;
    exports com.spring.sba301_hibernate.repository;
    exports com.spring.sba301_hibernate.service;

}