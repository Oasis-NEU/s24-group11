import json

def quantify_availability(json_data):
    # Define values for each day of the week (Monday to Sunday)
    day_values = {
        'monday': 1,
        'tuesday': 2,
        'wednesday': 3,
        'thursday': 4,
        'friday': 5,
        'saturday': 6,
        'sunday': 7
    }

    # Load JSON data
    parsed_data = json.loads(json_data)

    # Initialize a dictionary to store quantified data per user
    user_data = {}

    # Iterate through each item in the "data" list
    for item in parsed_data['data']:
        student_id = item['student_id']

        # Get the list of days the user is available
        available_days = [day for day, available in item.items() if available and day != 'student_id']

        # Calculate the value of availability based on the sum of values of available days
        availability_value = sum(day_values[day] for day in available_days)

        # Storing the quantified data per user
        user_data[student_id] = {'availability_value': availability_value}

    return user_data

# Example usage:
data = '''
{"data":[{"friday":false,"id":1,"lab_section_CRN":1,"monday":true,"programming_experience":null,"saturday":true,"student_id":"26c80cec-4c8e-4b05-9703-f04fa02e16bb","sunday":false,"thursday":false,"tuesday":true,"wednesday":false,"workload":null},{"friday":true,"id":2,"lab_section_CRN":1,"monday":true,"programming_experience":null,"saturday":true,"student_id":"c84aac27-9de7-46da-a9de-6fed76e12437","sunday":true,"thursday":true,"tuesday":true,"wednesday":true,"workload":null}],"status_code":200}
'''

result = quantify_availability(data)
print(result)

def pair_users(user_data):
    # Sort users by availability value
    sorted_users = sorted(user_data.items(), key=lambda x: x[1]['availability_value'])

    # Initialize a list to store paired users
    paired_users = []

    # Pair users with closest availability values
    for i in range(len(sorted_users) - 1):
        user1_id, user1_info = sorted_users[i]
        user2_id, user2_info = sorted_users[i + 1]
        difference = abs(user1_info['availability_value'] - user2_info['availability_value'])
        # Ensure no duplicates and no self-pairing
        if (user1_id != user2_id) and ((user1_id, user2_id) not in paired_users) and ((user2_id, user1_id) not in paired_users):
            paired_users.append(((user1_id, user2_id), difference))

    # Sort pairs by availability value difference
    paired_users.sort(key=lambda x: x[1])

    return [pair[0] for pair in paired_users]

# Example usage:
data = '''
{"data":[{"friday":false,"id":1,"lab_section_CRN":1,"monday":true,"programming_experience":null,"saturday":true,"student_id":"26c80cec-4c8e-4b05-9703-f04fa02e16bb","sunday":false,"thursday":false,"tuesday":true,"wednesday":false,"workload":null},{"friday":true,"id":2,"lab_section_CRN":1,"monday":true,"programming_experience":null,"saturday":true,"student_id":"c84aac27-9de7-46da-a9de-6fed76e12437","sunday":true,"thursday":true,"tuesday":true,"wednesday":true,"workload":null},{"friday":true,"id":3,"lab_section_CRN":1,"monday":true,"programming_experience":null,"saturday":true,"student_id":"d84aac27-9de7-46da-a9de-6fed76e12437","sunday":true,"thursday":true,"tuesday":true,"wednesday":true,"workload":null}],"status_code":200}
'''

user_data = quantify_availability(data)
paired_users = pair_users(user_data)
print("Paired users:", paired_users)

