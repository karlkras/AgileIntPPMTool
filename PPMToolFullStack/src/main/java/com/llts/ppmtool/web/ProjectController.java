package com.llts.ppmtool.web;

import com.llts.ppmtool.domain.Project;
import com.llts.ppmtool.services.ErrorService;
import com.llts.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    private ErrorService errorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(
            @Valid
            @RequestBody Project project,
            BindingResult result) {

        ResponseEntity<?> errors = errorService.getErrors(result);

        if(errors != null){
            return errors;
        }

        projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(project, HttpStatus.CREATED);
    }
}
