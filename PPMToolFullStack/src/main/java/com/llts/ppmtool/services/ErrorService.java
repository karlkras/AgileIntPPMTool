package com.llts.ppmtool.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ErrorService {
    @Nullable
    public ResponseEntity<?> getErrors (BindingResult result) {
        if(result.hasErrors()) {
            List<FieldError> fieldErrorList = result.getFieldErrors();

            Map<String, String> errorMap = new HashMap<>();

            for(FieldError fe : fieldErrorList) {
                errorMap.put(fe.getField(), fe.getDefaultMessage());
            }

            return new ResponseEntity<>(errorMap,
                    HttpStatus.BAD_REQUEST);
        } else {
            return null;
        }
    }
}
