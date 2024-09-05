import { Pagination } from "antd";

const Paginations = () => {
  const totalItems = 50; // Example of a static total number of items
  const currentPage = 1; // Example of a static current page
  const pageSize = 4; // Example of a static page size

  const handlePageChange = (page, pageSize) => {
    // Handle page change logic here
  };

  const handleLimitChange = (size, current) => {
    // Handle limit change logic here
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Pagination
        current={currentPage} // Static current page
        pageSize={pageSize} // Static page size
        total={totalItems} // Static total items
        onChange={handlePageChange} 
        showLessItems
        showQuickJumper
        showSizeChanger
        pageSizeOptions={['4', '8', '12', '16']} // Customize your options
        onShowSizeChange={handleLimitChange} // Update limit when page size changes
      />
    </div>
  );
};

export default Paginations;
