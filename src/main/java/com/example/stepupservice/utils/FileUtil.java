package com.example.stepupservice.utils;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

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
}
