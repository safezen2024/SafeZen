def addingcost(input1, input2, input3):
	
	max = 0

	while(input1 != 1):
		print(input2)
		cons_Add = []
		for i in range(input1-1):
			cons_Add.append((input2[i]) + (input2[i+1]))

		print(cons_Add)
		temp = cons_Add.copy()
		temp.sort()
		x = cons_Add.index(temp[0])
		max = max + (input3 * temp[0])
		input2[x] = temp[0]
		input2.pop(x+1)
   

	return max

print(addingcost(4, [4,5,6,7] , 3))

