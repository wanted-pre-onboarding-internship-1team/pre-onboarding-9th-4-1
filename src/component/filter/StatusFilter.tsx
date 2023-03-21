import { Column } from '@tanstack/react-table';
import React from 'react';

export default function StatusFilter({
  column,
  isFilterOpen,
}: {
  column: Column<any, any>;
  isFilterOpen: boolean;
}) {
  console.log(isFilterOpen);

  return <div>StatusFilter</div>;
}
