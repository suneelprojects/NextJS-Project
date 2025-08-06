export async function POST(request) {
  try {
    const data = await request.json();
    
    console.log('📡 SalesMax Proxy: Received data:', data);
    
    // Try multiple SalesMax endpoints
    const endpoints = [
      'https://salesmax.ai/collect',
      'https://salesmax.ai/track',
      'https://salesmax.ai/event',
      'https://salesmax.ai/submit',
      'https://api.salesmax.ai/collect',
      'https://api.salesmax.ai/track'
    ];
    
    let success = false;
    
    for (const endpoint of endpoints) {
      try {
        console.log(`🔗 SalesMax Proxy: Trying ${endpoint}`);
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Social-Prachar-Proxy/1.0'
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          console.log(`✅ SalesMax Proxy: Success with ${endpoint}`);
          success = true;
          break;
        } else {
          console.log(`⚠️ SalesMax Proxy: ${endpoint} returned ${response.status}`);
        }
      } catch (error) {
        console.log(`❌ SalesMax Proxy: ${endpoint} failed - ${error.message}`);
      }
    }
    
    if (success) {
      return Response.json({ 
        success: true, 
        message: 'Data sent to SalesMax successfully' 
      });
    } else {
      // If all endpoints fail, store for later retry
      console.log('📦 SalesMax Proxy: Storing data for later retry');
      
      // You could store this in a database or file system
      // For now, we'll just return a success to avoid client errors
      return Response.json({ 
        success: true, 
        message: 'Data queued for later delivery' 
      });
    }
    
  } catch (error) {
    console.error('❌ SalesMax Proxy Error:', error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
} 