package com.marseeys.backend.service.hrmsys;

import com.marseeys.backend.entity.hrmsys.employee.Shift;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.hrmsys.employee.ShiftRequest;
import com.marseeys.backend.repository.hrmsys.ShiftRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ShiftService {
    private final ShiftRepository shiftRepository;
    private final NextSequenceService nextSequenceService;
    private final FindHelper findHelper;

    public List<Shift> getShifts() {
        return shiftRepository.findAll();
    }

    public Shift saveShift(ShiftRequest shiftRequest) throws DatabaseException {
        Shift shift = new Shift(
                nextSequenceService.getNextSequence("ShiftSequence"),
                shiftRequest.getStart(),
                shiftRequest.getEnd()
        );

        try {
            return shiftRepository.save(shift);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_SHIFT_EXCEPTION
            );
        }
    }

    public void deleteShift(int id) throws DatabaseException {
        Shift shift = findHelper.findShift(id);

        shiftRepository.delete(shift);
    }
}
