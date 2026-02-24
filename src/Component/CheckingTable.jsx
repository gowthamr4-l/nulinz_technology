import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Text,
  Flex,
  Icon,
  TableContainer,
} from "@chakra-ui/react";
import { MdMoreHoriz } from "react-icons/md";

export default function CheckingTable() {
  const tableData = [
    { name: "Marketplace", progress: "17.5%", quantity: "2.458", date: "24.Jan.2021", checked: false },
    { name: "Venus PRO", progress: "10.8%", quantity: "1.485", date: "12.Jun.2021", checked: true },
    { name: "Uranus Kit", progress: "21.3%", quantity: "1.024", date: "5.Jan.2021", checked: true },
    { name: "Venus DS", progress: "31.5%", quantity: "858", date: "7.Mar.2021", checked: true },
    { name: "Venus 3D Asset", progress: "12.2%", quantity: "258", date: "17.Dec.2021", checked: false },
    { name: "Venus 3D Asset", progress: "12.2%", quantity: "258", date: "17.Dec.2021", checked: false },
    { name: "Venus 3D Asset", progress: "12.2%", quantity: "258", date: "17.Dec.2021", checked: false },
  ];

  return (
    <Box
      bg="white"
      p="20px"
      borderRadius="20px"
      boxShadow="0px 18px 40px rgba(112, 144, 176, 0.12)"
      maxWidth={{ base: "100%", md: "800px" }} // Reduced width for desktop
      margin="0 auto"
    >
      <Flex justify="space-between" align="center" mb="20px">
        <Text
          color="#1B2559" // Navy color from image
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Check Table
        </Text>
        <Box
          bg="#F4F7FE"
          p="8px"
          borderRadius="10px"
          cursor="pointer"
          _hover={{ bg: "#E9EDF7" }}
        >
          <Icon as={MdMoreHoriz} color="#4318FF" w="24px" h="24px" />
        </Box>
      </Flex>

      <TableContainer overflowX="auto">
        <Table variant="simple" color="gray.500" mb="24px">
          <Thead>
            <Tr borderBottom="1px solid" borderColor="#E9EDF7">
              <Th color="#A3AED0" fontSize="12px" fontWeight="500" pl="0">TITLE</Th>
              <Th color="#A3AED0" fontSize="12px" fontWeight="500">TITLE</Th>
              <Th color="#A3AED0" fontSize="12px" fontWeight="500">TITLE</Th>
              <Th color="#A3AED0" fontSize="12px" fontWeight="500">TITLE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((row, index) => (
              <Tr key={index} border="none">
                <Td pl="0">
                  <Flex align="center">
                    <Checkbox
                      defaultChecked={row.checked}
                      colorScheme="brandScheme"
                      me="12px"
                      size="lg"
                      sx={{
                        "span.chakra-checkbox__control": {
                          borderRadius: "6px",
                          border: "2px solid #4318FF",
                          _checked: {
                            bg: "#4318FF",
                            borderColor: "#4318FF",
                          },
                        },
                      }}
                    />
                    <Text color="#1B2559" fontSize="14px" fontWeight="700">
                      {row.name}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Text color="#1B2559" fontSize="14px" fontWeight="700">
                    {row.progress}
                  </Text>
                </Td>
                <Td>
                  <Text color="#1B2559" fontSize="14px" fontWeight="700">
                    {row.quantity}
                  </Text>
                </Td>
                <Td>
                  <Text color="#1B2559" fontSize="14px" fontWeight="700">
                    {row.date}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}