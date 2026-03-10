package sba301.fe.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import sba301.fe.pojos.Student;
import sba301.fe.services.IStudentService;

import java.io.IOException;

@Controller
public class LoginController {
    @Autowired
    private IStudentService iStudentService;

    @RequestMapping("/login")
    public ModelAndView showStudent(HttpServletResponse response) throws IOException {
        ModelAndView model = new ModelAndView("login");

        return model;
    }

    @RequestMapping(value ="/loginForm", method = RequestMethod.POST)
    public String manageStudent(HttpServletRequest request) throws IOException {
        String type = request.getParameter("btnManageStudent");
        String email = request.getParameter("txtEmail");
        String password = request.getParameter("txtPassword");

        if (type.equals("login")) {
            Student s = iStudentService.findByEmail(email);

            if (s != null && s.getPassword().equals(password)) {
                HttpSession session = request.getSession();
                session.setAttribute("email", email);

                return "redirect:/";
            }
        }

        return "redirect:/login";
    }
}
