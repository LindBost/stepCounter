package com.example.stepupservice.utils;

import com.example.stepupservice.models.PersonalData;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileUtil {
    public JSONArray readFile(String url) {
        JSONParser parser = new JSONParser();
        try(FileReader fileReader = new FileReader(url)) {
            Object obj = parser.parse(fileReader);
            JSONArray data = (JSONArray) obj;
            return data;
        } catch (Exception e) {
            return null;
        }
    }

    public boolean writeFile(String url, JSONArray data) {
        try {
            FileWriter fileWriter = new FileWriter(url);
            fileWriter.write(data.toJSONString());
            fileWriter.flush();
        } catch (IOException e) {
            return false;
        }
        return true;
    }
/*
    public List<PersonalData> getPersonalData() {

        List<PersonalData> personalData = new ArrayList<>();
        JSONParser parser = new JSONParser();
        try(FileReader fileReader = new FileReader(url)) {
            Object obj = parser.parse(fileReader);
            JSONArray data = (JSONArray) obj;


            data.forEach(userData -> {
                JSONObject userObject = (JSONObject)userData;
            });

            return data;
        } catch (Exception e) {
            return null;
        }
    }*/
}
