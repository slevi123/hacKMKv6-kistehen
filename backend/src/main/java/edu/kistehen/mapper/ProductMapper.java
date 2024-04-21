package edu.kistehen.mapper;

import edu.kistehen.dto.client.ClientShortDto;
import edu.kistehen.dto.note.NoteAddDto;
import edu.kistehen.dto.note.NoteOutDto;
import edu.kistehen.dto.product.ProductShortDto;
import edu.kistehen.dto.product.ProductUploadDto;
import edu.kistehen.model.Note;
import edu.kistehen.model.Product;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Collection;

@Mapper(componentModel = "spring")
public abstract class ProductMapper {
    public abstract ProductShortDto modelToDto(Product product);

    @IterableMapping(elementTargetType = ClientShortDto.class)
    public abstract Collection<ProductShortDto> modelsToDtos(Collection<Product> products);

    @Mapping(target = "id", ignore = true)
    public abstract Product dtoToModel(ProductUploadDto dto);
}
