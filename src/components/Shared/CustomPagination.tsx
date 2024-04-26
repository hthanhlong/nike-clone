import { Pagination } from 'flowbite-react'
import { useState } from 'react'

const CustomPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <div className="my-16 flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default CustomPagination
