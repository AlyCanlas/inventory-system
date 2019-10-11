package hau.edu.ph.ObprogL.service;

import hau.edu.ph.ObprogL.model.ComputerHardware;
import hau.edu.ph.ObprogL.repository.ComputerHardwareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComputerHardwareService {

    @Autowired
    private ComputerHardwareRepository computerHardwareRepository;

    public List<ComputerHardware> listOfAllComputerHardware() {
        return computerHardwareRepository.findAll();
    }

    public void saveComputerHardware(ComputerHardware computerHardware) {
        computerHardwareRepository.save(computerHardware);
    }

    public ComputerHardware getComputerHardware(Integer id) {
        return computerHardwareRepository.findById(id).get();
    }

    public void deleteComputerHardware(Integer id) {
        computerHardwareRepository.deleteById(id);
    }
}
