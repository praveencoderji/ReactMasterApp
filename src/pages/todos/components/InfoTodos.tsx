import React, { memo } from "react";

const InfoTodos: React.FC<any> = ({ qtyTodosCompleted, qtyTodos }) => {
  if (qtyTodosCompleted === qtyTodos) {
    return (
      <div>
        Yay!! All task completed 
      </div>
    );
  }
  return (
    <div>
      <strong>{qtyTodosCompleted}</strong> completed of {qtyTodos} tasks
    </div>
  );
};

export default memo(InfoTodos);