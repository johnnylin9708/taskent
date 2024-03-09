"use client";

import { useEffect, useState } from "react";
import { ListWithCards } from "@/types";
import { ListForm } from "./listForm";
import { ListItem } from "./listItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useAction } from "@/hooks/useAction";
import { updateListOrder } from "@/actions/updateListOrder";
import { updateCardOrder } from "@/actions/updateCardOrder";
import { toast } from "sonner";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
    onSuccess: () => {
      toast.success("List reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { execute: executeUpdateCardOrder } = useAction(updateCardOrder, {
    onSuccess: () => {
      toast.success("Card reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDrapEnd = (result: any) => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({
          ...item,
          id: item.id,
          order: index,
          _version: item._version,
        })
      );
      setOrderedData(items);
      executeUpdateListOrder({ items, boardId });
    }
    if (type === "card") {
      let newOrderedData = [...orderedData];
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destList) {
        return;
      }
      if (sourceList.Cards && !sourceList.Cards?.items) {
        sourceList.Cards.items = [];
      }

      if (destList.Cards && !destList.Cards?.items) {
        destList.Cards.items = [];
      }

      if (source.droppableId === destination.droppableId) {
        if (!sourceList.Cards?.items?.length) {
          return;
        }
        const reorderedCards = reorder(
          sourceList.Cards.items,
          source.index,
          destination.index
        ).map((item) => ({
          ...item,
          id: item.id,
          order: item.order,
          listId: item.listID,
          _version: item._version,
        }));

        reorderedCards.forEach((card, index) => {
          if (!card) return;
          card.order = index;
        });

        sourceList.Cards.items = reorderedCards;

        setOrderedData(newOrderedData);
        executeUpdateCardOrder({
          boardId: boardId,
          items: reorderedCards,
        });
      } else {
        if (!sourceList.Cards?.items) {
          return;
        }
        // Remove card from the source list
        const [movedCard] = sourceList.Cards.items.splice(source.index, 1);

        // Assign the new listId to the moved card
        if (!movedCard) {
          return;
        }
        movedCard.listID = destination.droppableId;

        if (!destList.Cards?.items) {
          return;
        }
        // Add card to the destination list
        destList.Cards?.items.splice(destination.index, 0, movedCard);

        sourceList.Cards?.items.forEach((card, idx) => {
          if (card) {
            card.order = idx;
          }
        });

        // Update the order for each card in the destination list
        destList.Cards?.items.forEach((card, idx) => {
          if (card) {
            card.order = idx;
          }
        });

        setOrderedData(newOrderedData);
        executeUpdateCardOrder({
          boardId: boardId,
          items: destList.Cards.items.map((item, index) => ({
            ...item,
            id: item?.id,
            order: index,
            listId: item?.listID,
            _version: item?._version,
          })),
        });
      }
    }
  };
  return (
    <DragDropContext onDragEnd={onDrapEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm /> <div className="flex-shrink-0 w-1"></div>
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};
