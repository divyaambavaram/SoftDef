import React from "react";
import "./Pagination.css";

export default function Pagination() {
  return (
    <div className="pagination-container">
      <button>1</button>
      <button>2</button>
      <button className="active">3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}
