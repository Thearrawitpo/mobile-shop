"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { BsFillCaretDownFill } from "react-icons/bs";
import useAction from "@/hooks/use-action";
import useMobileModal from "@/hooks/use-mobile-modal";
import { MobileType, deleteMobileById, getMobile } from "@/services/api/mobile";

const columns: ColumnDef<MobileType>[] = [
  {
    id: "actions",
    header: () => {
      const modal = useMobileModal();
      const handleCreate = async () => {
        modal.resetData();
        modal.onOpen();
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='text-xs p-1'>
              <span className=''>Actions</span>
              <BsFillCaretDownFill size={10} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleCreate}>Create</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableHiding: false,
    cell: ({ row }) => {
      const rowData = row.original;
      const modal = useMobileModal();
      const action = useAction();

      const handleDelete = async () => {
        if (!!rowData.id) {
          const res = await deleteMobileById(rowData.id);
          if (!!res) {
            action.toggleDel();
          }
        }
      };
      const handleEdit = async () => {
        modal.setData(rowData);
        modal.onOpen();
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },

  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "storage",
    header: "Storage",
  },
  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "quality",
    header: "Quality",
  },
];

type Props = {};

export default function MobileTable({}: Props) {
  const modal = useMobileModal();
  const [mobileList, setMobileList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mobileList = await getMobile("");
      setMobileList(mobileList);
    };
    fetchData();
  }, [modal.isOpen]);
  return (
    <div>
      <DataTable data={mobileList} columns={columns} />
    </div>
  );
}
