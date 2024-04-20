package edu.kistehen.controller;

import edu.kistehen.dto.order.OrderAddDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name="Orders")
@RequestMapping("/api/orders")
public class OrderController {
    @PostMapping
    public String addOrder(@RequestBody OrderAddDto addDto) {
        return "Order";
    }

    @DeleteMapping("/{orderId}")
    public boolean cancelOrder(@PathVariable("orderId") String orderId) {
        return true;
    }
}
