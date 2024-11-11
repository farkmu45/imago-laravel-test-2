<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Feedback</title>
  @vite('resources/css/app.css')
</head>

<body class="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-3xl">
    <div class="mb-8 rounded-lg bg-white p-6 shadow-md">
      <h2 class="mb-6 text-2xl font-bold">Submit Feedback</h2>
      <form class="space-y-4" id="feedbackForm">
        <div>
          <label class="block text-sm font-medium text-gray-700" for="name">Name</label>
          <input
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="name" name="name" type="text" required>
          <span class="hidden text-sm text-red-500" id="nameError"></span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
          <input
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="email" name="email" type="email" required>
          <span class="hidden text-sm text-red-500" id="emailError"></span>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700" for="comment">Comment</label>
          <textarea class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="comment" name="comment" rows="4" required></textarea>
          <span class="hidden text-sm text-red-500" id="commentError"></span>
        </div>

        <button
          class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit">
          Submit Feedback
        </button>
      </form>
    </div>

    <div class="space-y-4" id="feedbackList">
      <!-- Feedback items will be inserted here -->
    </div>
  </div>

  @vite('resources/js/app.js')
</body>

</html>
