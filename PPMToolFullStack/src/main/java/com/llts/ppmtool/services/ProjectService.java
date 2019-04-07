package com.llts.ppmtool.services;

import com.llts.ppmtool.domain.Project;
import com.llts.ppmtool.exceptions.ProjectIdException;
import com.llts.ppmtool.repositorires.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException(
                    String.format("Project ID '%s' already exists",
                            project.getProjectIdentifier()));
        }
    }
}
