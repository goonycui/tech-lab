package com.example.springscheduledtask.scheduler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.stream.IntStream;

@Component
public class TaskService {
    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @Value("${schedule.task1.interval:2000}")
    private long triggerInterval;

    @Value("${schedule.task1.count:3}")
    private int triggerCount;

    //@Scheduled(fixedDelayString = "${schedule.task1.fixedDelay}")
    public void scheduleFixedDelayTask() {
        LOGGER.info("Fixed delay task - {}", LocalDateTime.now());

    }

    //@Scheduled(fixedRateString = "${schedule.task1.fixedRate}")
    public void scheduleFixedRateTask() {
        LOGGER.info("Fixed rate task - {}", LocalDateTime.now());

    }

    @Scheduled(cron = "${schedule.task1.cron}")
    public void scheduleTaskUsingCronExpression() {
        IntStream.rangeClosed(1, triggerCount)
                        .forEach( i -> {
                            LOGGER.info("Schedule task using cron jobs - {} - sequence - {}", LocalDateTime.now(), i);
                            try {
                                Thread.sleep(triggerInterval);
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            }
                        });
    }
}
