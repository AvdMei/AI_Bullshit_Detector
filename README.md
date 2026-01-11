# AI_Bullshit_Detector
calculating a I Do Not Know-score for a Liquid AI model

deployed at: https://aidk-d5os.vercel.app/

in backend/app.py set parameters and put api token in render env variables
deploy the backend folder on render and add the render link in page.tsx

backend model should output a .json of format
{"score":*INSERT SCORE HERE*,
"output": *INSERT OUTPUT HERE*}
