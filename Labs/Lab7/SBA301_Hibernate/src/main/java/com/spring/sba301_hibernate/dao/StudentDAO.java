package com.spring.sba301_hibernate.dao;

import com.spring.sba301_hibernate.pojo.Student;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.List;

public class StudentDAO {
    private SessionFactory sessionFactory = null;
    private Configuration cf = null;

    public StudentDAO() {
        try {
            cf = new Configuration().configure("hibernate.cfg.xml");
            sessionFactory = cf.buildSessionFactory();
        }
        catch (Exception e) {
            System.err.println("Error initializing SessionFactory: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void save(Student student) {
        Session s = sessionFactory.openSession();
        Transaction t = null;
        try {
            t = s.beginTransaction();
            s.save(student);
            t.commit();
        }
        catch (Exception e) {
            if (t != null) t.rollback();
            System.err.println("Error saving student: " + e.getMessage());
            e.printStackTrace();
        }
        finally {
            s.close();
        }
    }

    public List<Student> getAllStudents() {
        List<Student> students = null;
        Session s = sessionFactory.openSession();
        try {
            Query<Student> q = s.createQuery("FROM Student", Student.class);
            students = q.list();
        }
        catch (Exception e) {
            System.err.println("Error retrieving students: " + e.getMessage());
            e.printStackTrace();
        }
        finally {
            s.close();
        }

        return students;
    }

    public Student getStudentById(int id) {
        Student student = null;
        Session s = sessionFactory.openSession();
        try {
            student = s.get(Student.class, id);
        }
        catch (Exception e) {
            System.err.println("Error retrieving student by ID: " + e.getMessage());
            e.printStackTrace();
        }
        finally {
            s.close();
        }

        return student;
    }

    public Student findStudentByEmail(String email) {
        Student student = null;
        Session s = sessionFactory.openSession();
        try {
            Query<Student> q = s.createQuery("FROM Student WHERE email = :email", Student.class);
            q.setParameter("email", email);
            student = q.uniqueResult();
        }
        catch (Exception e) {
            System.err.println("Error finding student by email: " + e.getMessage());
            e.printStackTrace();
        }
        finally {
            s.close();
        }

        return student;
    }

    public void updateStudent(Student student) {
        Session s = sessionFactory.openSession();
        Transaction t = null;
        try {
            t = s.beginTransaction();
            s.update(student);
            t.commit();
        } catch (Exception e) {
            if (t != null) t.rollback();
            System.err.println("Error updating student: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void deleteStudent(Student student) {
        Session s = sessionFactory.openSession();
        Transaction t = null;
        try {
            t = s.beginTransaction();
            s.delete(student);
            t.commit();
        } catch (Exception e) {
            if (t != null) t.rollback();
            System.err.println("Error deleting student: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
