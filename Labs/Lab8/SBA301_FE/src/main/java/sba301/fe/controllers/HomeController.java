package sba301.fe.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import sba301.fe.pojos.Student;
import sba301.fe.services.IStudentService;

import java.util.List;

@Controller
public class HomeController {
    @Autowired
    private IStudentService iStudentService;

    @GetMapping("/")
    public ModelAndView showStudent(HttpServletResponse response, HttpServletRequest request) {
        HttpSession session = request.getSession();

        if (session.getAttribute("email") != null) {
            List<Student> studentList = iStudentService.findAll();
            ModelAndView model = new ModelAndView("home");
            model.addObject("studentList", studentList);
            return model;
        } else {
            ModelAndView model = new ModelAndView("login");
            return model;
        }
    }

    @RequestMapping(value = "/manageStudent")
    public String manageStudent(HttpServletRequest request) {
        HttpSession session = request.getSession();

        if (session.getAttribute("email") != null) {
            String type = request.getParameter("btnManageStudent");

            int studentID = Integer.parseInt(request.getParameter("txtID"));
            String email = request.getParameter("txtEmail");
            String password = request.getParameter("txtPassword");
            String firstName = request.getParameter("txtFirstName");
            String lastName = request.getParameter("txtLastName");
            int mark = Integer.parseInt(request.getParameter("txtMark"));

            Student student = new Student(studentID, email, password, firstName, lastName, mark);

            if (email.length() > 0) {
                switch (type) {
                    case "add":
                        iStudentService.save(student);
                        break;

                    case "update":
                        iStudentService.update(studentID, student);
                        break;

                    case "delete":
                        iStudentService.delete(student);
                        break;

                    default:
                        break;
                }

                return "redirect:/";
            }
        }

        return "redirect:/login";
    }
}