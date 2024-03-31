<?php
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$description = $_POST['description'];

// Construct folder and file paths
$folderPath = $_SERVER['USERPROFILE'] . '\\Desktop\\' . $option1;
$filePath = $folderPath . '\\' . $option2 . '.txt';

// Create the folder if it doesn't exist
if (!file_exists($folderPath)) {
    mkdir($folderPath);
}

// Create or overwrite the file with the description content
file_put_contents($filePath, $description);

echo "Folder '$option1' and file '$option2.txt' created on desktop with description:\n$description";
?>
