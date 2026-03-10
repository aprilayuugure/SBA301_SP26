<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>

<html lang="en">
    <head>
        <title>Login</title>

        <link href = "resources/css/bootstrap.min.css" rel = "stylesheet">
        <link href = "resources/css/login.css" rel = "stylesheet">
    </head>

    <body>
        <div class = "container">
            <div class = "row justify-content-center">
                <div class = "col-md-4">
                    <form:form id = "user_form_1"
                               action = "loginForm"
                               method = "post">
                        <table class = "table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th colspan = "2">Login form</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type = "text"
                                               id = "txtEmail"
                                               name = "txtEmail"
                                               class = "form-control">
                                    </td>
                                </tr>

                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type = "password"
                                               id = "txtPassword"
                                               name = "txtPassword"
                                               class = "form-control">
                                    </td>
                                </tr>

                                 <tr>
                                    <td colspan = "2">

                                    <button type = "submit"
                                            name = "btnManageStudent"
                                            value = "login"
                                            class = "btn btn-primary m-1">
                                        Login
                                    </button>

                                    <button type = "submit"
                                            name = "btnManageStudent"
                                            value = "cancel"
                                            class = "btn btn-secondary m-1">
                                        Cancel
                                    </button>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form:form>
                </div>
            </div>
        </div>
    </body>
</html>