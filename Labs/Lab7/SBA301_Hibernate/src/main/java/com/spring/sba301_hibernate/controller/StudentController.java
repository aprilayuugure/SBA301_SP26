package com.spring.sba301_hibernate.controller;

import com.spring.sba301_hibernate.pojo.Student;
import com.spring.sba301_hibernate.service.StudentService;
import javafx.collections.ObservableList;
import javafx.fxml.*;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import java.net.URL;
import java.util.*;

public class StudentController implements Initializable {
    @FXML private TableView<Student> studentTable;
    @FXML private TableColumn<Student, Integer> idColumn;
    @FXML private TableColumn<Student, String> emailColumn;
    @FXML private TableColumn<Student, String> firstNameColumn;
    @FXML private TableColumn<Student, String> lastNameColumn;
    @FXML private TableColumn<Student, Double> marksColumn;

    @FXML private TextField txtEmail;
    @FXML private TextField txtFirstName;
    @FXML private TextField txtLastName;
    @FXML private TextField txtMarks;
    @FXML private PasswordField txtPassword;

    private final StudentService studentService = new StudentService();

    @Override
    public void initialize(URL location, ResourceBundle resources)
    {
        idColumn.setCellValueFactory(new PropertyValueFactory<>("id"));
        emailColumn.setCellValueFactory(new PropertyValueFactory<>("email"));
        firstNameColumn.setCellValueFactory(new PropertyValueFactory<>("firstName"));
        lastNameColumn.setCellValueFactory(new PropertyValueFactory<>("lastName"));
        marksColumn.setCellValueFactory(new PropertyValueFactory<>("marks"));

        refreshStudentTable();
    }

    private void refreshStudentTable() {
        try {
            List<Student> students = studentService.getAll();
            ObservableList<Student> studentObservableList = javafx.collections.FXCollections.observableArrayList(students);
            studentTable.setItems(studentObservableList);
        }
        catch (Exception e) {
            showAlert(Alert.AlertType.ERROR, "Error", "Failed to load students: " + e.getMessage());
        }
    }

    private void displayStudentDetails(Student student) {
        txtEmail.setText(student.getEmail());
        txtPassword.setText(student.getPassword());
        txtFirstName.setText(student.getFirstName());
        txtLastName.setText(student.getLastName());
        txtMarks.setText(String.valueOf(student.getMarks()));
    }

    private void clearForm() {
        txtEmail.clear();
        txtPassword.clear();
        txtFirstName.clear();
        txtLastName.clear();
        txtMarks.clear();

        studentTable.getSelectionModel().clearSelection();
    }

    private void showAlert(Alert.AlertType alertType, String error, String s) {
        Alert alert = new Alert(alertType);
        alert.setTitle(error);
        alert.setHeaderText(null);
        alert.setContentText(s);
        alert.showAndWait();
    }

    @FXML
    private void handleAddStudent() {
        try {
            String email = txtEmail.getText();
            String firstName = txtFirstName.getText();
            String lastName = txtLastName.getText();
            double marks = Double.parseDouble(txtMarks.getText());

            Student student = new Student(email, "", firstName, lastName, marks);
            studentService.save(student);
            refreshStudentTable();
            clearForm();
        }
        catch (Exception e) {
            showAlert(Alert.AlertType.ERROR, "Error", "Failed to add student: " + e.getMessage());

            System.out.println(e.getMessage());
        }
    }

    @FXML
    private void handleUpdateStudent() {
        try {
            Student selectedStudent = studentTable.getSelectionModel().getSelectedItem();
            if (selectedStudent == null) {
                showAlert(Alert.AlertType.WARNING, "No Selection", "Please select a student to update.");
                return;
            }

            selectedStudent.setId(selectedStudent.getId());
            selectedStudent.setEmail(txtEmail.getText());
            selectedStudent.setFirstName(txtFirstName.getText());
            selectedStudent.setLastName(txtLastName.getText());
            selectedStudent.setMarks(Double.parseDouble(txtMarks.getText()));

            studentService.update(selectedStudent);
            showAlert(Alert.AlertType.INFORMATION, "Success", "Student updated successfully.");
            refreshStudentTable();
            clearForm();
        }
        catch (NumberFormatException e) {
            showAlert(Alert.AlertType.ERROR, "Error", "Failed to update student: " + e.getMessage());
        }
    }

    @FXML
    private void handleDeleteStudent() {
        try {
            Student selectedStudent = studentTable.getSelectionModel().getSelectedItem();
            if (selectedStudent == null) {
                showAlert(Alert.AlertType.WARNING, "No Selection", "Please select a student to delete.");
                return;
            }

            studentService.delete(selectedStudent);
            showAlert(Alert.AlertType.INFORMATION, "Success", "Student deleted successfully.");
            refreshStudentTable();
            clearForm();
        }
        catch (Exception e) {
            showAlert(Alert.AlertType.ERROR, "Error", "Failed to delete student: " + e.getMessage());
        }
    }
}
