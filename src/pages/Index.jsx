import React, { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Input, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text, useToast } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const Index = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const toast = useToast();

  const handleCalculate = () => {
    const totalCalc = parseFloat(income) - parseFloat(expense);
    setTotal(totalCalc);
    toast({
      title: "Calculation successful.",
      description: "Total has been updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Simple Accounting Software
        </Text>
        <FormControl>
          <FormLabel htmlFor="income">Income</FormLabel>
          <NumberInput defaultValue={0} min={0} onChange={(valueString) => setIncome(valueString)}>
            <NumberInputField id="income" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="expense">Expense</FormLabel>
          <NumberInput defaultValue={0} min={0} onChange={(valueString) => setExpense(valueString)}>
            <NumberInputField id="expense" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleCalculate}>
          Calculate Total
        </Button>
        <Text fontSize="xl">Total: {total.toFixed(2)}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
