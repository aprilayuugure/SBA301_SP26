<%@ taglib prefix = "c" uri = "jakarta.tags.core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<%@ page isELIgnored = "false" %>
<html lang = "en">
    <head>
        <meta charset = "utf-8">
        <title>Spring Boot Demo</title>
        <meta http-equiv = "X-UA-Compatible" content= "IE=edge">
        <meta content = "width=device-width, initial-scale=1.0" name = "viewport" />
        <meta content = "" name = "author" />

        <link href = "resources/css/bootstrap.min.css" rel = "stylesheet">
        <link href = "resources/css/style.css" rel = "stylesheet" >

        <link href = "favicon.ico" rel = "shortcut icon" />
    </head>

    <body>
        <div class = "page-container">
            <div>
                <div class = "page-content">
                    <div class = "row">
                        <div class = "col-md-12">
                            <div class = "col-lg-12 col-xs-12 col-sm-12">
                                <div class = "portlet light bordered" style = "">
                                    <div>
                                        <img src = "resources/images/User.jpg"
                                             class = "title-icons"
                                             alt = "logo" />
                                                <span class = "caption-subject font-dark bold"
                                                      style = "">Manage Users</span>
                                    </div>
                                </div>

                                <div class = "row" style = "">
                                    <div class = "col-md-12">
                                        <label class = "lbl-toggle">User Lists</label>

                                        <div class = "collapsible-content">
                                            <div>
                                                <table id = "user_table1"
                                                       class = "table table-bordered table-striped table-hover table-condensed"
                                                       border = "1" bordercolor = "#f9e491" id = "sample_1">
                                                    <thead class = "gridheader">
                                                        <tr>
                                                            <th style = "">Choose</th>
                                                            <th style = "">ID</th>
                                                            <th style = "">Email</th>
                                                            <th style = "">Password</th>
                                                            <th style = "">First name</th>
                                                            <th style = "">Last name</th>
                                                            <th style = "">Mark</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <c:forEach var = "student" items = "${studentList}" varStatus = "STT">
                                                            <tr>
                                                                <td align = "center">
                                                                    <div class = "icheck-list">
                                                                        <input type = "radio" id = "" value = "${STT.index + 1}"
                                                                               name = "user_inGroup_1"
                                                                               onClick = "user_getRowSelected()">
                                                                    </div>
                                                                </td>

                                                                <td align = "center">${student.id}</td>
                                                                <td align = "center">${student.email}</td>
                                                                <td align = "center">${student.password}</td>
                                                                <td align = "center">${student.firstName}</td>
                                                                <td align = "center">${student.lastName}</td>
                                                                <td align = "center">${student.marks}</td>
                                                            </tr>
                                                        </c:forEach>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <form:form id = "user_form_1" action = "manageStudent"
                                                  method = "post">
                                                <div class = "row">
                                                    <div class = "col-md-6">
                                                        <div>
                                                            <div>
                                                                <table class = "table table-bordered table-condensed"
                                                                       border = "1" bordercolor = "#f9e491">
                                                                    <thead class = "detail_header">
                                                                        <tr>
                                                                            <th class = "detail-first-column">Key Name</th>
                                                                            <th>Key Value</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>
                                                                        <tr style = "">
                                                                            <td>ID</td>
                                                                            <td align = "center">
                                                                                <input style = ""
                                                                                       type = "text"
                                                                                       id = "txtID"
                                                                                       name = "txtID"
                                                                                       value = "">
                                                                            </td>
                                                                        </tr>

                                                                        <tr style = "">
                                                                            <td>Email</td>
                                                                            <td align = "center">
                                                                                <input style = ""
                                                                                       type = "text"
                                                                                       id = "txtEmail"
                                                                                       name = "txtEmail"
                                                                                       value = "">
                                                                            </td>
                                                                        </tr>

                                                                        <tr style = "">
                                                                            <td>Password</td>
                                                                            <td align = "center">
                                                                                <input style = ""
                                                                                       type = "text"
                                                                                       id = "txtPassword"
                                                                                       name = "txtPassword"
                                                                                       value = "">
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>First Name</td>
                                                                            <td align = "center">
                                                                                <input style = ""
                                                                                       type = "text"
                                                                                       id = "txtFirstName"
                                                                                       name = "txtFirstName"
                                                                                       value = "">
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>Last Name</td>
                                                                            <td align = "center">
                                                                                <input style = ""
                                                                                       type = "text"
                                                                                       id = "txtLastName"
                                                                                       name = "txtLastName"
                                                                                       value = "">
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>Mark</td>
                                                                            <td align = "center">
                                                                                <input style = ""
                                                                                       type = "text"
                                                                                       id = "txtMark"
                                                                                       name = "txtMark" value = "">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div align = "left">
                                                            <div class = "clearfix">
                                                                <button type = "submit"
                                                                        id = "user_button_1"
                                                                        name = "btnManageStudent"
                                                                        value = "add"
                                                                        class = "btn btn-primary"
                                                                        style = "">
                                                                    <i class = "fa fa-plus"></i> Add
                                                                </button>

                                                                <button type = "submit"
                                                                        id = "user_button_2"
                                                                        name = "btnManageStudent"
                                                                        value = "update"
                                                                        class = "btn btn-warning text-white"
                                                                        style = "">
                                                                    <i class = "fa fa-edit"></i> Update
                                                                </button>

                                                                <button type = "submit"
                                                                        id = "user_button_3"
                                                                        name = "btnManageStudent"
                                                                        value = "delete"
                                                                        class = "btn btn-danger"
                                                                        style = "">
                                                                    <i class = "fa fa-trash"></i> Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form:form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <script src = "<c:url value = '/resources/js/jquery-4.0.0.min.js'/>"></script>
    <script src = "<c:url value = '/resources/js/load_data.js'/>"></script>
</html>