package com.spring.sba301_hibernate.controller;

import javafx.application.Application;
import javafx.scene.Scene;

import java.io.IOException;

public class MainApplication extends Application {
    @Override
    public void start(javafx.stage.Stage primaryStage) throws Exception {
        try {
            javafx.fxml.FXMLLoader loader = new javafx.fxml.FXMLLoader(getClass().getResource("/student-view.fxml"));

            Scene scene = new Scene(loader.load());

            primaryStage.setTitle("Student Management");
            primaryStage.setScene(scene);
            primaryStage.show();
        }
        catch (IOException e) {
            System.err.println("Error loading FXML: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}
