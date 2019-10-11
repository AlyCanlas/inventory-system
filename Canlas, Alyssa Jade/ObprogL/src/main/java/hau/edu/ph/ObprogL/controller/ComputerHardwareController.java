package hau.edu.ph.ObprogL.controller;

import hau.edu.ph.ObprogL.model.ComputerHardware;
import hau.edu.ph.ObprogL.service.ComputerHardwareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class ComputerHardwareController {

    @Autowired
    private ComputerHardwareService computerHardwareService;

    @RequestMapping("/")
    public String loginPage(Model model) {
        return "login";
    }

    @RequestMapping("/main")
    public String mainPage(Model model) {
        return "main";
    }

    @RequestMapping("/parts")
    public String partsPage(Model model) {
        return "parts";
    }

    @RequestMapping("/partsInventory")
    public String inventory(Model model) {
        List<ComputerHardware> listOfAllComputerHardware = computerHardwareService.listOfAllComputerHardware();
        model.addAttribute("listOfAllComputerHardware", listOfAllComputerHardware);
        return "index";
    }

    @RequestMapping("/addParts")
    public String addPage(Model model) {
        ComputerHardware computerHardware = new ComputerHardware();
        model.addAttribute("computerHardware", computerHardware);
        return "addComputerHardware";
    }

    @RequestMapping(value = "/saveComputerHardware", method = RequestMethod.POST)
    public String saveComputerHardware(@ModelAttribute("computerHardware") ComputerHardware computerHardware) {
        computerHardwareService.saveComputerHardware(computerHardware);
        return "redirect:/partsInventory";
    }

    @RequestMapping("/updateParts/{id}")
    public ModelAndView updatePage(@PathVariable(name = "id") Integer id) {
        ModelAndView modelAndView = new ModelAndView("updateComputerHardware");
        ComputerHardware computerHardware = computerHardwareService.getComputerHardware(id);
        modelAndView.addObject("computerHardware", computerHardware);
        return modelAndView;
    }

    @RequestMapping("/deleteParts/{id}")
    public String deleteComputerHardware(@PathVariable(name = "id") Integer id) {
        computerHardwareService.deleteComputerHardware(id);
        return "redirect:/partsInventory";
    }
}
