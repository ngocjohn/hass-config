#!/usr/bin/env python3

import os

# Create log directory if it doesn't exist
log_dir = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(log_dir, exist_ok=True)

report_file_name = 'commit-report'

def test_report_file_creation():
    set_report_file = os.path.join(log_dir, report_file_name)
    # Create or clear the report file
    with open(set_report_file, "w") as report_file:
        report_file.write("Test Report File Creation\n")

    # Check if the file exists
    assert os.path.isfile(set_report_file), "Report file was not created."
    # Check if the content is correct
    with open(set_report_file, "r") as report_file:
        content = report_file.read()
        assert content == "Test Report File Creation\n", "Report file content is incorrect."


if __name__ == "__main__":
    test_report_file_creation()
    print("All tests passed.")