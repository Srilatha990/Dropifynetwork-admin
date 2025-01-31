// import { useContext, useEffect, useState } from "react";
// import { SidebarContext } from "@/context/SidebarContext";

// const useToggleDrawer = () => {
//   const [serviceId, setServiceId] = useState("");
//   const [allId, setAllId] = useState([]);
//   const [title, setTitle] = useState("");
//   const { toggleDrawer, isDrawerOpen, toggleModal, toggleBulkDrawer } =
//     useContext(SidebarContext);

//   const handleUpdate = (id) => {
//     setServiceId(id);
//     toggleDrawer();
//   };

//   const handleUpdateMany = (id) => {
//     setAllId(id);
//     toggleBulkDrawer();
//   };

//   const handleModalOpen = (id, title) => {
//     setServiceId(id);
//     toggleModal();
//     setTitle(title);
//   };

//   useEffect(() => {
//     if (!isDrawerOpen) {
//       setServiceId();
//     }
//   }, [isDrawerOpen]);

//   const handleDeleteMany = async (id, products) => {
//     setAllId(id);
//     toggleModal();
//     setTitle("Selected Products");
//   };

//   return {
//     title,
//     allId,
//     serviceId,
//     handleUpdate,
//     setServiceId,
//     handleModalOpen,
//     handleDeleteMany,
//     handleUpdateMany,
//   };
// };

// export default useToggleDrawer;


import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "@/context/SidebarContext";

const useToggleDrawer = () => {
  const [serviceId, setServiceId] = useState("");
  const [allId, setAllId] = useState([]); // Array to hold selected items' IDs
  const [title, setTitle] = useState("");
  const { toggleDrawer, isDrawerOpen, toggleModal, toggleBulkDrawer } =
    useContext(SidebarContext);

  const handleUpdate = (id) => {
    setServiceId(id);
    toggleDrawer();
  };

  const handleUpdateMany = (id) => {
    setAllId(id);
    toggleBulkDrawer();
  };

  const handleModalOpen = (id, title) => {
    setServiceId(id);
    toggleModal();
    setTitle(title);
  };

  const handleDeleteMany = async (ids) => {
    setAllId(ids); // Set selected IDs
    toggleModal(); // Open the modal for bulk deletion
    setTitle("Selected Products"); // Set the title dynamically
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setServiceId(); // Clear serviceId when drawer is closed
    }
  }, [isDrawerOpen]);

  return {
    title,
    allId,
    serviceId,
    handleUpdate,
    setServiceId,
    handleModalOpen,
    handleDeleteMany, // Expose this for bulk delete handling
    handleUpdateMany,
  };
};

export default useToggleDrawer;
